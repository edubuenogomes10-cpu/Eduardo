export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-black/30 py-8 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Eduardo Bueno. Todos os direitos reservados.
        </p>
        <p className="text-sm text-muted-foreground">
          Desenvolvido com Next.js, React e atenção a acabamento visual.
        </p>
      </div>
    </footer>
  );
}
