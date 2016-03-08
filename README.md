# plugin-for-dmd

A better markdown template for jsdoc

## usage

1. write a template file, e.g. `README.hbs`

2. add devDependencies

```
"jsdoc-to-markdown": "~1.3.1",
"plugin-for-dmd": "*",
```

3. add scripts

```
"doc": "jsdoc2md --src ${sourceFiles} -t ${templateFile} --plugin plugin-for-dmd -d 3 -p list -r list -c list>README.md"
```