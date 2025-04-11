rem @echo off

setlocal

copy "..\node_modules\.prisma\client\index.d.ts" "types"
copy "..\node_modules\.prisma\client\index.d.ts" "dist"

endlocal