using System;
using Microsoft.EntityFrameworkCore;

namespace FilmeDB.Models
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Ator> Atores { get; set; }
        
        public DbSet<Filme> Filmes { get; set; }
    }
}