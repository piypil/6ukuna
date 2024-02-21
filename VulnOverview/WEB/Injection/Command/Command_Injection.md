https://knowledge-base.secureflag.com/vulnerabilities/code_injection/os_command_injection_nodejs.html
https://www.stackhawk.com/blog/nodejs-command-injection-examples-and-prevention/
https://book.hacktricks.xyz/pentesting-web/deserialization/nodejs-proto-prototype-pollution/prototype-pollution-to-rce


# NodeJS

`child_process`

Важно никогда не передавать в эти функции несанкционированный пользовательский ввод.
`exec`
`execSync`
`spawn`
`spawnSync`


```BAD
const output = child_process.execSync(`ping -c 1 '${destination}'`);
```
```GOOD
const output = child_process.spawnSync('ping', ['-c', '1', destination]);
```


https://rules.sonarsource.com/typescript/RSPEC-5883/