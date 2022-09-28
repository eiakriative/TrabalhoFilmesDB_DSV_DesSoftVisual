using Microsoft.EntityFrameworkCore.Migrations;

namespace FilmeDB.Migrations
{
    public partial class Migracao3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Atores_Generos_GeneroId",
                table: "Atores");

            migrationBuilder.DropIndex(
                name: "IX_Atores_GeneroId",
                table: "Atores");

            migrationBuilder.DropColumn(
                name: "GeneroId",
                table: "Atores");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "GeneroId",
                table: "Atores",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Atores_GeneroId",
                table: "Atores",
                column: "GeneroId");

            migrationBuilder.AddForeignKey(
                name: "FK_Atores_Generos_GeneroId",
                table: "Atores",
                column: "GeneroId",
                principalTable: "Generos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
