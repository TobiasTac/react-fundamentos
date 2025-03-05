import React from "react";

// export default function Post() {
//   const params = useParams();
//   const { search } = useLocation();
//   const queryParams = useMemo(() => new URLSearchParams(search), [search]);

//   console.log(params);
//   console.log(queryParams.get('myquery'));


//   return <h1> My post </h1>;
// }

export default class Post extends React.Component {
  constructor(props) {
    super(props);

    const { search } = this.props.location;
    this.queryParams = new URLSearchParams(search);
  }

  render() {
    console.log(this.props.match.params);
    console.log(this.queryParams.get('meuQuery'));
    return <h1> Post page </h1>;
  }
}