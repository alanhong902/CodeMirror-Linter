var editor = CodeMirror(document.getElementById("code-js"), {
        mode: "javascript",
        lineWrapping: true,
        lineNumbers: true,
        lint: {
            disableEval: true,
            disableExit: true,
            disablePHP7: true,
            disabledFunctions: ['proc_open', 'system'],
            deprecatedFunctions: ['wp_list_cats']
        },
        gutters: ["CodeMirror-lint-markers"],
        styleActiveLine: true,
        matchBrackets: true,
        value: "var widgets = []\nfunction updateHints() {/*from w  w w.  ja va  2 s.c o  m*/\n\teditor.operation(function(){\n\tfor (var i = 0; i &lt; widgets.length; ++i)\n\t\teditor.removeLineWidget(widgets[i]);\n\twidgets.length = 0;\n\tJSHINT(editor.getValue());\n\tfor (var i = 0; i &lt; JSHINT.errors.length; ++i) {\n\t\t\t...\n\t\t\t...\n\t\t\t...\n\t}\n\t});\n\tvar info = editor.getScrollInfo();\n\tvar after = editor.charCoords({line: editor.getCursor().line + 1, ch: 0}, 'local').top;\n\tif (info.top + info.clientHeight &lt; after)\n\t\teditor.scrollTo(null, after - info.clientHeight + 3);\n}"
    });
function onselectlanguage() {
    var val = document.getElementById("languages").value;
    if (val.localeCompare("JavaScript") === 0) {
        editor.setOption("mode","javascript");
        editor.setValue("var widgets = []\nfunction updateHints() {/*from w  w w.  ja va  2 s.c o  m*/\n\teditor.operation(function(){\n\tfor (var i = 0; i &lt; widgets.length; ++i)\n\t\teditor.removeLineWidget(widgets[i]);\n\twidgets.length = 0;\n\tJSHINT(editor.getValue());\n\tfor (var i = 0; i &lt; JSHINT.errors.length; ++i) {\n\t\t\t...\n\t\t\t...\n\t\t\t...\n\t}\n\t});\n\tvar info = editor.getScrollInfo();\n\tvar after = editor.charCoords({line: editor.getCursor().line + 1, ch: 0}, 'local').top;\n\tif (info.top + info.clientHeight &lt; after)\n\t\teditor.scrollTo(null, after - info.clientHeight + 3);\n}");
        console.log("Changed Mode:" + val);
    } else if (val.localeCompare("HTML") === 0) {
        editor.setOption("mode", "text/html");
        editor.setValue("<div>\n\t<p\n</div>");
        console.log("Changed Mode:" + val);
    } else if (val.localeCompare("CSS") === 0) {
        editor.setOption("mode", "text/css");
        editor.setValue("#language{\n\tcolor:#234562\n\tdf:\n}");
        console.log("Changed Mode:" + val);
    } else if (val.localeCompare("PHP") === 0) {
        editor.setOption("mode", "application/x-httpd-php-open");
        editor.setValue("<?php\necho 'Hello world';\n$foo = [1, 2, 3]\n\t\n\twp_list_cats($bar);\nproc_open(false);\nexit(0);\neval('evil');\n");
        console.log("Changed Mode:" + val);
    } else if (val.localeCompare("Java") === 0) {
        editor.setOption("mode", "text/x-java");
        editor.setValue(`
        public class HelloWorldExample{
          public static void main(String args[]){
            System.out.println("Hello World !");
          }
        }`)
        console.log("Changed Mode:" + val);
    }
}
function enableLint(){
    editor.setOption("lint",true);
}
function disableLint(){
    editor.setOption("lint",false);
}