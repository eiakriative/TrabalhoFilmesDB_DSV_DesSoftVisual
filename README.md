# 💡 Trabalho de Desenvolvimento de Software Visual

<br />

# TrabalhoFilmesDB

## About

<table>
<tr>
<td>

Repositorio totalmente voltado para armazenamenta da plataforma para dados de filmes e atores e suas imformações

Key features of **Amazing GitHub Template**:

- Configurable README.md template
- Configurable LICENSE template
- Configurable CODE_OF_CONDUCT.md template
- Configurable CONTRIBUTING.md template
- Configurable SECURITY.md template
- Configurable issues template
- Pull request template
- CODEOWNERS template
- Additional labels template
- Automatic locking for closed issues and PRs workflow
- Automatic cleaning for stale issues and PRs workflow
- Automatic label verification for PRs workflow
- Automatic security code scanning workflow via CodeQL

<details open>
<summary>Additional info</summary>
<br>

This project is the result of huge research. I'm a long-time GitHub user so I've seen more than [7.3k](https://github.com/dec0dOS?tab=stars) READMEs so far. I've started writing docs for my open source projects (that are currently in their early stages so they exist in the private space for now). After I've analyzed many popular GitHub READMEs and other GitHub-related docs and features I've tried to create a general-propose template that may be useful for any project.

Of course, no template will serve all the projects since your needs may be different. So [Cookiecutter](https://github.com/cookiecutter/cookiecutter) comes to the rescue. It allows [Jinja template language](https://jinja.palletsprojects.com) to be used for complex cases. Just enter up the project preferences you want in the Cookiecutter interactive menu and that's it. There is a manual setup that could be useful for your existing projects (or if you don't want to use Cookiecutter for some reason). **This README.md file is not a template itself**, you should [download the precompiled template](https://github.com/dec0dOS/amazing-github-template/releases/download/latest/template.zip) and replace the predefined values, then remove unused sections.

</details>

</td>
</tr>
</table>

 ### Repositorio para grupo do trabalho de quinta na disciplina de Desenvolvimento de Software Visual. 
 ### O objetivo é a criação de uma aplicação com uma database de fimes.

<br />

## 👨🏻‍🏫 Professor
### Diogo S. Deconto

<br />

## 🚀 Alunos envolvidos
### André([@itsandrekanas](https://github.com/itsandrekanas))
### Amanda([@amandagaabs](https://github.com/amandagaabs))
### Daniel([@Daniel-Diniz](https://github.com/Daniel-Diniz))
### Gustavo([@gustavosoaresreis](https://github.com/gustavosoaresreis))


## Comandos git

Link: https://github.com/itsandrekanas/gitcomandos/blob/main/README.md

## Regras para funcionar o projeto

### Ao entrar no projeto dar um

```sh
cd .\FilmesDB\
```

```sh
dotnet restore
```

```sh
dotnet run ou dotnet watch run
```

### Não esqueça da migracao

```sh
dotnet ef migrations add NomeMigracao
```

```sh
dotnet ef database update
```

### Caso não rode o projeto

```sh
dotnet tool install --global dotnet-ef --version 5.0.17
```

obs:  Ao baixar o EntiyFramework as vezes é necessário abrir e reabrir o vscode.

```sh
dotnet add package Microsoft.EntityFrameworkCore.InMemory --version 5.0.17
```

```sh
dotnet add package Microsoft.EntityFrameworkCore.Sqlite --version 5.0.17
```

```sh
dotnet add package Microsoft.EntityFrameworkCore.Design --version 5.0.17
```
