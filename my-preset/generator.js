module.exports = (api, options, rootOptions) => {
    //安装一些基础公共库以及项目内部库
    api.extendPackage({
        dependencies: {
            lodash: '^4.0.0',
        },
        devDependencies: {},
    });

    if (options.vuex) {
        api.extendPackage({
            dependencies: {
                vuex: '^3.0.1',
            },
        });
    }

    if (options.router) {
        api.extendPackage({
            dependencies: {
                'vue-router': '^3.0.1',
            },
        });
    }

    //以EJS模板文件的方式生成项目文件
    api.render(
        {
            './src/main.js': './template/main.js',
        },
        options
    );

    api.render({
        './f2eci.json': './template/f2eci.json',
        './vue.config.js': './template/vue.config.js',
    });
};
