export type TableDefinition = {
  name: string;
  columns: string[];
};

export function generateCreateTableSql(table: TableDefinition): string {
  const columns = table.columns.length > 0 ? table.columns.join(", ") : "id TEXT PRIMARY KEY";
  return `CREATE TABLE ${table.name} (${columns});`;
}
