## Contributing

pertama fork repo ini.  

```shell
git clone <your-forked-repo>
npm install

git checkout -b my-fix
# Edit file ...

git commit -m "tambah feature"
git push origin my-fix
```

Terakhir,buat pull request di github.

The following npm script are available

- `npm start` - create build, install globally and run cgx
- `npm run build` - create build
- `npm run refresh` - removes node modules, package-lock.json, lib and re-installs everything.
