using Microsoft.EntityFrameworkCore.Migrations;

namespace FilmeDB.Migrations
{
    public partial class Migracione : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Filmes",
                newName: "filmeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "filmeId",
                table: "Filmes",
                newName: "Id");
        }
    }
}
