import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import { I18n } from "aws-amplify/utils";

import config from "../aws-exports";

import "@aws-amplify/ui-react/styles.css";
import { dict } from "@/lib/auth/authVocabularies";

Amplify.configure(config);
I18n.putVocabularies(dict);
I18n.setLanguage("ja");

const App = () => {
  return (
    <Authenticator initialState="signIn">
      {({ signOut, user }) => (
        <div>
          <p>Welcome {user?.username}</p>
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
  // const [todos, setTodos] = useState<Todo[]>([]);
  // useEffect(() => {
  //   fetchTodos();
  // }, []);
  // async function fetchTodos() {
  //   const apiData = await API.graphql({ query: listTodos });
  //   const todosFromAPI = apiData.data.listTodos.items;
  //   setTodos(todosFromAPI);
  // }
  // return (
  //   <View className="App" margin="0 3rem">
  //     <View className="header">
  //       <Flex
  //         direction="row"
  //         justifyContent="space-between"
  //         alignItems="center"
  //       >
  //         <Heading level={1}>My Todo App</Heading>
  //         <Flex direction="row">
  //           <Button onClick={signOut}>Sign Out</Button>
  //         </Flex>
  //       </Flex>
  //     </View>
  //     <View margin="3rem 0">
  //       <Table caption="" highlightOnHover={false}>
  //         <TableHead>
  //           <TableRow>
  //             <TableCell as="th">No.</TableCell>
  //             <TableCell as="th">Title</TableCell>
  //             <TableCell as="th">Status</TableCell>
  //             <TableCell as="th">Priority</TableCell>
  //             <TableCell as="th">Milestone</TableCell>
  //             <TableCell as="th">Discription</TableCell>
  //           </TableRow>
  //         </TableHead>
  //         <TableBody>
  //           {todos.map((todo, index) => (
  //             <TableRow key={index}>
  //               <TableCell>{index}</TableCell>
  //               <TableCell>{todo.title}</TableCell>
  //               <TableCell>{todo.status}</TableCell>
  //               <TableCell>{todo.priority}</TableCell>
  //               <TableCell>
  //                 {todo.start} - {todo.end}
  //               </TableCell>
  //               <TableCell>
  //                 {todo.description ? todo.description : "-"}
  //               </TableCell>
  //             </TableRow>
  //           ))}
  //         </TableBody>
  //       </Table>
  //     </View>
  //   </View>
  // );
};

export default App;
