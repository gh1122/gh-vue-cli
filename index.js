#!/usr/bin/env node

/*
在写npm包的时候需要在脚本的第一行写上#!/usr/bin/env node ，用于指明该脚本文件要使用node来执行。

/usr/bin/env 用来告诉用户到path目录下去寻找node，#!/usr/bin/env node 可以让系统动态的去查找node，已解决不同机器不同用户设置不一致问题。

PS： 该命令必须放在第一行， 否者不会生效

*/

const path = require('path');
const preset = path.resolve(__dirname, 'my-preset');

const program = require('commander');
const execa = require('execa');

program
    .version(require('./package').version)
    .description('基于vue-cli的定制脚手架')
    .usage('<command> [options]');

program
    .command('go <project-name>')
    .description('使用定制preset创建vue-cli项目')
    .action(function (project) {
        let command = `vue create ${project} --preset ${preset}`;
        const child = execa.shell(command, {
            stdio: 'inherit',
        });
    });

//除了专有的go命令，其他的命令都转交给vue-cli
program.command('*').action(function () {
    let command = process.argv.slice(2);
    command.unshift('vue');

    const child = execa.shell(command.join(' '), {
        stdio: 'inherit',
    });
});

program.parse(process.argv);
