# My resume

My resume (CV) in French and English, powered by [JSON Resume](https://jsonresume.org/).

Current themes:

- [Stack Overflow](https://github.com/phoinixi/jsonresume-theme-stackoverflow) (English).
- [Débordement de Pile](https://github.com/bpesquet/jsonresume-theme-debordementdepile) (French).

## Building

```bash
# Installing dependencies
{npm|yarn} install

# Build English version
resume export BaptistePesquet_Resume.{html|pdf} -t stackoverflow

# Build French version
resume export CV_BaptistePesquet.{html|pdf} -t debordementdepile -r cv.json
```
