function BorderAnimatedContainer({ children }) {
  return (
    <div className="w-full h-full [background:linear-gradient(45deg,theme(colors.forest.900),theme(colors.forest.800)_50%,theme(colors.forest.900))_padding-box,conic-gradient(from_var(--border-angle),theme(colors.forest.600/.48)_80%,_theme(colors.mint.500)_86%,_theme(colors.blossom.300)_90%,_theme(colors.mint.500)_94%,_theme(colors.forest.600/.48))_border-box] rounded-2xl border border-transparent animate-border flex relative overflow-hidden">
      {children}
    </div>
  );
}
export default BorderAnimatedContainer;
