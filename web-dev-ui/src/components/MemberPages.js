import members from "../members.json";

export default function MemberPages() {
  return (
    <div className="mt-12 text-center" id="members">
      <h2 className="lg:text-5xl">
        member <span className="text-primary">pages</span>
      </h2>
      <div className="flex flex-wrap justify-center mt-8">
        {members.map((index, member) => {
          return <Member name={members[member]} key={index} />;
        })}
      </div>
    </div>
  );
}

function Member({ name }) {
  return (
    <div className="w-1/3 mx-4 md:w-1/5">
      <a href={`/member-pages/${name}`}>
        <img className='rounded-md hover:shadow-xl transition-primary ' src={`http://localhost:3000/member-pages/${name}/`} alt={`${name}'s page`} onLoad={() => console.log("loaded")} />
      </a>
      <div className="mt-2">
        <a href={`/member-pages/${name}`} className="px-2 py-1 text-2xl rounded-md hover-bg-gray">
          {name}
        </a>
      </div>
    </div>
  );
}
