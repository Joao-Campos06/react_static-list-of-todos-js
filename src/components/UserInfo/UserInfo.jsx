export const UserInfo = ({ user }) => {
  if (!user || !user.email) {
    return null; // ou exibir uma mensagem padrão
  }

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
