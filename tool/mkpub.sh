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
  pushd ${PUBDIR}
  tar zcvf ${SUBPRJ}.tar.gz ${SUBPRJ}
  popd
done
