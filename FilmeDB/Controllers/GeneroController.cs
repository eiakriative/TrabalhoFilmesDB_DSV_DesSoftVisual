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

        
        // PATCH: /api/atores/editar
        
        [Route("Editar")]
        [HttpPut]
        public IActionResult Editar([FromBody] Genero genero)
        {
            _context.Generos.Update(genero);
            _context.SaveChanges();
            return Ok(genero);
        }


        // DELETE: /api/atores/deletar/{id}

        [HttpDelete]
        [Route("delete/{id}")]
        public IActionResult Delete([FromRoute] int? id)
        {

            Ator ator = _context.Atores.FirstOrDefault
            (
                ator => ator.Id == id
            );

            if (id == null)
            {
                return NotFound();
            }
            _context.Atores.Remove(ator);
            _context.SaveChanges();
            return Deletado(_context.Atores.ToList());
        }
        
    }
}