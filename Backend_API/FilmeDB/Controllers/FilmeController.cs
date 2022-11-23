using System;
using System.Collections.Generic;
using System.Linq;
using FilmeDB.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/filmes")]
    public class FilmeController : ControllerBase
    {
        private readonly DataContext _context;
        public FilmeController(DataContext context) =>
            _context = context;

        // GET: /api/filmes/listar
        [HttpGet]
        [Route("listar")]
        public IActionResult Listar() =>
            Ok(_context.Filmes
            .Include(p => p.Genero)
            .ToList());

        // POST: /api/filmes/cadastrar
        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Cadastrar([FromBody] Filme filme)
        {
            filme.Genero = _context.Generos
            .Find(filme.GeneroId);
            _context.Filmes.Add(filme);
            _context.SaveChanges();
            return Created("Filme adicionado com sucesso!", filme);
        }


        // PUT: /api/filmes/editar
        [Route("editar")]
        [HttpPatch]
        public IActionResult Editar([FromBody] Filme filme)
        {
                _context.Filmes.Update(filme);
                _context.SaveChanges();
                return Ok(filme);   
        }

	 // GET: /api/filmes/buscar/{id}
        [HttpGet]
        [Route("buscar/{id}")]
        public IActionResult Buscar([FromRoute] int id)
        {
            Filme filme = _context.Filmes.Find(id);
            return filme != null ? Ok(filme) : NotFound();
        }

        // DELETE: /api/filmes/deletar/{id}
        [HttpDelete]
        [Route("deletar/{id}")]
        public IActionResult Delete([FromRoute] int? id)
        {
            Filme filme = _context.Filmes.FirstOrDefault
            (
                filme => filme.filmeId == id
            );

            if (id == null)
            {
                return NotFound();
            }
            _context.Filmes.Remove(filme);
            _context.SaveChanges();
            return Ok(_context.Filmes.ToList());
        }
        // GET: /api/filmes/buscarpornome/{Nome}
        [HttpGet]
        [Route("buscarpornome/{Nome}")]
        public IActionResult buscarPorNome([FromRoute] string Nome) =>
            Ok(_context.Filmes
                .Include(f => f.Genero)
                .Where(f => f.Nome == Nome
                ));
        
        // GET: /api/filmes/buscarporano/{ano}
        [HttpGet]
        [Route("buscarporano/{Ano}")]
        public IActionResult BuscarPorAno([FromRoute] string Ano) =>
            Ok(_context.Filmes
                .Include(f => f.Genero)
                .Where(f => f.Ano == Ano
                ));
    }
}