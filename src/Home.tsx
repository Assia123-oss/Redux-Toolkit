import React from 'react'
import { Person , Country } from "./Person"

const Home = () => {
  return (
    <div>
      this is Home
      <Person
        name="teta"
        email="teta@gmail.com"
        age={18}
        isMarried={true}
        friends={["joanna", "gianna", "audrey", "sandra"]}
        country={Country.Brazil}
      />
    </div>
  );
}

export default Home
