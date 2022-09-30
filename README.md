# 💡 Trabalho de Desenvolvimento de Software Visual

<br />

# TrabalhoFilmesDB

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
