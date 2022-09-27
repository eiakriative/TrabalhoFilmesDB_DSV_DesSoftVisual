using System;
using System.Collections.Generic;
using System.Text.Json;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FilmeDB.Models
{
    //Data Annotations
    public class Ator
    {
        public Ator() => CriadoEm = DateTime.Now;
        public int Id { get; set; }

        [Required(ErrorMessage = "O campo nome é obrigatório!")]
        public string Nome { get; set; }

        public List<Filme> Filme { get; set; } = new List<Filme>();

        //public int FilmeId { get; set; }

        public DateTime Nascimento { get; set; }

        public DateTime CriadoEm { get; set; }
        
    }
}