const mongoose = require('mongoose');

module.exports = () => {
    const connect = () => {
        if (process.env.NODE_ENV !== 'production') {
            mongoose.set('debug', true);
        }
        mongoose.connect(
            'mongodb://192.168.10.7:27017',
            { dbName: 'nodejs' },
            (err) => {
                if (err) {
                    console.log('몽고디비 연결 에러', err);
                } else {
                    console.log('몽고디비 연결 성공');
                }
            }
        );
    };
    connect();

    mongoose.Connection.on('error', (error) => {
        console.error('몽고디비 연결 에러', error);
    });
    mongoose.Connection.on('disconnected', () => {
        console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.');
        connect();
    });

    require('./user');
    require('./comment');
};
