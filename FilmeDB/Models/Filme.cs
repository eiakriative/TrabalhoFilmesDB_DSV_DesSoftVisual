using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FilmeDB.Models
{
    public class Filme
    {
        public Filme() => CriadoEm = DateTime.Now;
        public int Id { get; set; }

        [Required(ErrorMessage = "O campo nome é obrigatório!")]
        public string Nome { get; set; }
        public Ator Ator {get; set;}
        public DateTime Nascimento { get; set; }

        public DateTime CriadoEm { get; set; }
    }
}