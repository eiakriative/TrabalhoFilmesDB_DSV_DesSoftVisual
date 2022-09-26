using System.Collections.Generic;
using System.Linq;
using FilmeDB.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/filme")]
    public class FilmeController : ControllerBase
    {
        private readonly DataContext _context;
        public FilmeController(DataContext context) =>
            _context = context;

        // GET: /api/funcionario/listar
        [HttpGet]
        [Route("listar")]
        public IActionResult Listar() => Ok(_context.Filmes.Include(x => x.Ator).ToList());

        // POST: /api/funcionario/cadastrar
        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Cadastrar([FromBody] Filme filme)
        {
            _context.Filmes.Add(filme);
            _context.SaveChanges();
            return Created("", filme);
        }

        // GET: /api/atores/buscar/{nome}

        // DELETE: /api/atores/deletar/{id}
        

        // PATCH: /api/atores/alterar

    }
}