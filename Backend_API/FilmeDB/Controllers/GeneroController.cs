using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FilmeDB.Models;
using Microsoft.AspNetCore.Mvc;

namespace FilmeDB.Controllers
{
      [ApiController]
    [Route("api/generos")]
    public class GeneroController : ControllerBase
    {
        private readonly DataContext _context;
        public GeneroController(DataContext context) =>
            _context = context;

        //POST: api/generos/cadastrar
        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Cadastrar([FromBody] Genero genero)
        {
            _context.Generos.Add(genero);
            _context.SaveChanges();
            return Created("Genero cadastrado com sucesso!", genero);
        }

        //GET: api/generos/listar
        [HttpGet]
        [Route("listar")]
        public IActionResult Listar() => Ok(_context.Generos.ToList());


     	// GET: /api/generos/buscar/{id}
        [HttpGet]
        [Route("buscar/{id}")]
        public IActionResult Buscar([FromRoute] int id)
        {
            Genero genero = _context.Generos.Find(id);
            return genero != null ? Ok(genero) : NotFound();
        }

        // PATCH: /api/generos/editar
        [HttpPatch]
        [Route("editar")]
        public IActionResult Editar([FromBody] Genero genero)
        {
                _context.Generos.Update(genero);
                _context.SaveChanges();
                return Ok(genero);
                      
        }
}
}