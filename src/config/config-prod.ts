export default {
    node: {
        host: "106.52.3.52",
        port: 3000,
    },
    redis: {
        port: 6379,
        host: "106.52.3.52",
        prefix: "sam:", //存诸前缀
        // ttl: 60 * 60 * 23,  //过期时间
        family: 4, // 4 (IPv4) or 6 (IPv6)
        db: 0
    },
    mysql: {
        dialect: "mysql",
        database: "fm",
        username: "root",
        password: "fm@2020",
        host: "106.52.3.52",
        port: 3306,
    },
}
