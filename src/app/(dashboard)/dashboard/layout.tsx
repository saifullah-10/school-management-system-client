export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" flex">
      <aside>Dashboard</aside>
   <div>   {children}</div>
    </div>
  );
}
