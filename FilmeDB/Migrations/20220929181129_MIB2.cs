using Microsoft.EntityFrameworkCore.Migrations;

namespace FilmeDB.Migrations
{
    public partial class MIB2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Atores_Generos_GeneroID",
                table: "Atores");

            migrationBuilder.DropIndex(
                name: "IX_Atores_GeneroID",
                table: "Atores");

            migrationBuilder.DropColumn(
                name: "GeneroID",
                table: "Atores");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "GeneroID",
                table: "Atores",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Atores_GeneroID",
                table: "Atores",
                column: "GeneroID");

            migrationBuilder.AddForeignKey(
                name: "FK_Atores_Generos_GeneroID",
                table: "Atores",
                column: "GeneroID",
                principalTable: "Generos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
