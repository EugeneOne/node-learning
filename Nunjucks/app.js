const nunjucks = require("nunjucks");

function createEnv(path, opts) {
    //configure配置项
    //autoescape (默认值: true) 控制输出是否被转义
    //throwOnUndefined (default: false) 当输出为 null 或 undefined 会抛出异常
    //noCache (default: false) 不使用缓存，每次都重新编译
    //watch (默认值: false) 当模板变化时重新加载。使用前请确保已安装可选依赖 chokidar
    var autoescape = opts.autoescape && true,
        noCache = opts.noCache || false,
        watch = opts.watch || false,
        throwOnUndefined = opts.throwOnUndefined || false,
        //Environment 类用来管理模板，使用他可以加载模板，模板之间可以继承和包含
        //实例化 Environment 时传入两个参数，一组 loaders 和配置项 opts
        env = new nunjucks.Environment(
            //node端使用FileSystemLoader加载模板
            //new FileSystemLoader([searchPaths], [opt])
            //watch - 如果为 true，当文件系统上的模板变化了，系统会自动更新他。使用前请确保已安装可选依赖 chokidar。
            //noCache - 如果为 true，不使用缓存，模板每次都会重新编译。
            new nunjucks.FileSystemLoader('views', {
                noCache: noCache,
                watch: watch,
            }), {
                autoescape: autoescape,
                throwOnUndefined: throwOnUndefined
            });
    if (opts.filters) {
        for (var f in opts.filters) {
            //添加名为 name 的自定义过滤器，func 为调用的函数
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env;
}

var env = createEnv('views', {
    watch: true,
    filters: {
        hex: function (n) {
            return '0x' + n.toString(16);
        }
    }
})

//nunjucks.render(name, [context], [callback]) 
var s = env.render('hello.html', {
    header: 'Hello',
    body: 'bla bla bla...'
});
console.log(s)