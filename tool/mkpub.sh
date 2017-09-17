#!/bin/sh

CMD=$(which $0)
if [ "${CMD}" == "" ]; then
  CWD=$(pwd)
else
  CWD=$(dirname $CMD)
  CWD=$(cd ${CWD}; pwd)
fi

PRJDIR=$(dirname ${CWD})
PUBDIR=$(dirname ${PRJDIR})

for SUBMDL in $(ls ${PRJDIR}/lib); do
  SUBPRJ=fav-type.${SUBMDL}
  cp -R ${PRJDIR}/lib/${SUBMDL} ${PUBDIR}/${SUBPRJ}
  cp ${PRJDIR}/LICENSE ${PUBDIR}/${SUBPRJ}
  pushd ${PUBDIR}/${SUBPRJ}
  for JSFILE in $(ls *.js); do
    echo ${JSFILE}
    sed "s/= *require('\.\.\//= require('/g" ${JSFILE} > ${JSFILE}.mod
    mv ${JSFILE}.mod ${JSFILE}
    sed 's/= *require("\.\.\//= require("/g' ${JSFILE} > ${JSFILE}.mod
    mv ${JSFILE}.mod ${JSFILE}
  done
  popd
  pushd ${PUBDIR}
  tar zcvf ${SUBPRJ}.tar.gz ${SUBPRJ}
  popd
done


pushd ${PRJDIR} > /dev/null 2>&1

filetitle=$(basename $(pwd))
mv ${PUBDIR}/${filetitle}.tar.gz ${PUBDIR}/${filetitle}.tar.gz.org

sed 's|"name": "fav-type"|"name": "@fav/type"|' package.json > package.new
diff package.json package.new
mv package.new package.json

cd ${PUBDIR}
tar zcf ${filetitle}.tar.gz ${filetitle}

popd > /dev/null 2>&1

