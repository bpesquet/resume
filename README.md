# My resume

My resume (CV) in French and English, powered by [JSON Resume](https://jsonresume.org/).

Current theme: [Stack Overflow](https://github.com/phoinixi/jsonresume-theme-stackoverflow) (English).

## Development notes

```bash
# Installing dependencies
{npm|yarn} install

# Build English version
resume export resume.{html|pdf} -t stackoverflow

# Build French version
# Translated files in the fr/ subfolder need to be copied to node_modules/ beforehand
resume export cv.{html|pdf} -t stackoverflow -r cv.json
```
