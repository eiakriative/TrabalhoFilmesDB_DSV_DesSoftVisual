using System.Collections.Generic;
using System.Linq;
using FilmeDB.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/funcionario")]
    public class FuncionarioController : ControllerBase
    {
        private readonly DataContext _context;
        public FuncionarioController(DataContext context) =>
            _context = context;

        // GET: /api/funcionario/listar
        [HttpGet]
        [Route("listar")]
        public IActionResult Listar() => Ok(_context.Atores.Include(x => x.Filme).ToList());

        // POST: /api/funcionario/cadastrar
        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Cadastrar([FromBody] Ator ator)
        {
            _context.Atores.Add(ator);
            _context.SaveChanges();
            return Created("", ator);
        }

        // GET: /api/atores/buscar/{nome}

        // DELETE: /api/atores/deletar/{id}
        

        // PATCH: /api/atores/alterar

    }
}