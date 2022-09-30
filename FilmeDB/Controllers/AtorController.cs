using System.Security.Cryptography.X509Certificates;
using System.Collections.Generic;
using System.Linq;
using FilmeDB.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FilmeDB.Controllers
{
    [ApiController]
    [Route("api/atores")]
    public class FuncionarioController : ControllerBase
    {
        private readonly DataContext _context;
        public FuncionarioController(DataContext context) => _context = context;

        // GET: /api/atores/listar
        [HttpGet]
        [Route("listar")]
        public IActionResult Listar() => Ok(_context.Atores
            .Include(x => x.Filme)
            .Include(p => p.Genero)
            .ToList());

        // POST: /api/atores/cadastrar
        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Cadastrar([FromBody] Ator ator)
        {
            ator.Filme = _context.Filmes.Find(ator.FilmeId);
            ator.Genero = _context.Generos.Find(ator.GeneroId);
            _context.Atores.Add(ator);
            _context.SaveChanges();
            return Created("Ator adicionado com sucesso!", ator);
        }

        // PATCH: /api/atores/alterar

        // DELETE: /api/atores/deletar/{id}
        
        // GET: /api/atores/buscar/{nome}
        [HttpGet]
        [Route("buscarpornome/{Nome}")]
        public IActionResult BuscarPorNome(string Nome) 
        {
             Ator ator = _context.Atores
             .Include(p => p.Genero)
             .FirstOrDefault(f => f.Nome == Nome);
            //If ternário
            return ator != null ? Ok(ator) : NotFound();
        }


    }
}
