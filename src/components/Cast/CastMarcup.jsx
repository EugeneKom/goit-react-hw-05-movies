import { AuthorThumb } from './CastMarcup.styled';

const CastMarcup = ({ actors }) => {
  return (
    <>
      <AuthorThumb>
        {actors.map(actor => {
          if (actor.profile_path) {
            return (
              <li key={actor.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                  width={90}
                  height={120}
                />
                <h3>{actor.name}</h3>
                <span>{actor.character}</span>
              </li>
            );
          }
          return [];
        })}
      </AuthorThumb>
    </>
  );
};

export default CastMarcup;
