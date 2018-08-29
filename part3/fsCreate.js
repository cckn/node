const fs = require('fs');

fs.access(  // 폴더나 확인 체크(유무, 권한)
    './folder',
    fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK,
    (err) => {
        if (err) {
            if (err.code === 'ENOENT') { //파일, 폴더가 없을 때의 에러코드 ENOENT
                console.log('폴더 없음');
                fs.mkdir('./folder', (err) => {
                    if (err) {
                        throw err;
                    }
                    console.log('폴더 만들기 성공');
                    fs.open('./folder/file.js', 'w', (err, fd) => {
                        if (err) {
                            throw err;
                        }
                        console.log('빈 파일 만들기 성공', fd);
                        fs.rename(
                            './folder/file.js',
                            './folder/newfile.js',
                            (err) => {
                                if (err) {
                                    throw err;
                                }
                                console.log('이름 바꾸기 성공 ');
                            }
                        );
                    });
                });
            } else {
                throw err;
            }
        } else {
            console.log('이미 폴더 있음 ');
        }
    }
);
