// path.basename(path[, ext]) // 给出完整路径，返回文件名称
// ext 扩展名
path.basename('/foo/bar/baz/asdf/quux.html');
// 返回: 'quux.html'

path.basename('/foo/bar/baz/asdf/quux.html', '.html');
// 返回: 'quux'



// path.dirname(path) // 返回文件路径
path.dirname('/foo/bar/baz/asdf/quux');
// 返回: '/foo/bar/baz/asdf'



// path.extname(path)
path.extname('index.html');
// 返回: '.html'
path.extname('.index');
// 返回: ''



// path.sep  提供平台特定的路径片段分隔符
// 在 POSIX 上（linux）
'foo/bar/baz'.split(path.sep);
// 返回: ['foo', 'bar', 'baz']
// 在 Windows 上
'foo\\bar\\baz'.split(path.sep);
// 返回: ['foo', 'bar', 'baz']