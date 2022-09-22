  [ApiController]
    [Route("api/funcionario")]
    public class FuncionarioController : ControllerBase
    {
        
       // GET: /api/filme/listar
        [Route("listarfilme")]
        [HttpGet]
        public IActionResult Listar() {

        }

        // POST: /api/filme/cadastrar
        [Route("cadastrarfilme")]
        [HttpPost]
        public IActionResult Cadastrar()
        {
           return null
        }

        // GET: /api/filme/buscar/1995
        [Route("buscar/{ano}")]
        [HttpGet]
        public IActionResult Buscar([FromRoute] string ano)
        {

            return null;
        }

        
        // GET: /api/filme/buscar/terror
        [Route("buscar/{genero}")]
        [HttpGet]
        public IActionResult Buscar([FromRoute] string genero)
        {

            return null;
        }

        // GET: /api/filme/buscar/starwars
        [Route("buscar/{nome}")]
        [HttpGet]
        public IActionResult Buscar([FromRoute] string nome)
        {

            return null;
        }

        // DELETE: /api/filme/deletar/123
        [Route("deletar/{nome}")]
        [HttpDelete]
        public IActionResult Deletar([FromRoute] string nome)
        {
            return null;
        }

        // PATCH: /api/filme/alterar
        [Route("alterar")]
        [HttpPatch]
        public IActionResult Alterar()
        {
           
        }
}
