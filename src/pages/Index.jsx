import { useState } from "react";
import { Box, Heading, Input, Button, Flex, List, ListItem, Checkbox, Text } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleCompleted = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <Box maxWidth="500px" mx="auto" mt={8}>
      <Heading mb={8}>Todo App</Heading>
      <form onSubmit={handleSubmit}>
        <Flex>
          <Input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Enter a new todo" mr={4} />
          <Button type="submit" colorScheme="blue" leftIcon={<FaPlus />}>
            Add
          </Button>
        </Flex>
      </form>
      <List mt={8} spacing={4}>
        {todos.map((todo, index) => (
          <ListItem key={index}>
            <Flex alignItems="center">
              <Checkbox isChecked={todo.completed} onChange={() => toggleCompleted(index)} mr={4} />
              <Text as={todo.completed ? "del" : "span"}>{todo.text}</Text>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
