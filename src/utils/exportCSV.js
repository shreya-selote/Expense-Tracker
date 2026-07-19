export function exportToCSV(transactions) {
  if (transactions.length === 0) {
    alert("No transactions available to export.");
    return;
  }

  const headers = [
    "Title",
    "Amount",
    "Type",
    "Category",
    "Date",
    "Notes",
  ];

  const rows = transactions.map((transaction) => [
    transaction.title,
    transaction.amount,
    transaction.type,
    transaction.category,
    transaction.date,
    transaction.notes,
  ]);

  const csvContent = [headers, ...rows]
    .map((row) => row.join(","))
    .join("\n");

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = "transactions.csv";

  link.click();

  URL.revokeObjectURL(url);
}