import * as vscode from "vscode";

let statusBarItem: vscode.StatusBarItem | undefined;

export function activate(context: vscode.ExtensionContext) {
  statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  );

  statusBarItem.text = "AI  5h 51% | 7d 59% | ctx 52% / 800k | api $72.25";
  statusBarItem.tooltip = "Static AI usage metrics";
  statusBarItem.show();

  context.subscriptions.push(statusBarItem);
}

export function deactivate() {
  statusBarItem?.dispose();
}
