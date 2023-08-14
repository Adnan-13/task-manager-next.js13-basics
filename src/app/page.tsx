import Link from 'next/link';
import { prisma } from '@/db';
import TodoItem from '@/components/TodoItem';

const getTodos = () => {
	return prisma.todo.findMany();
};

async function toggleTodo(id: string, completed: boolean) {
	'use server';

	await prisma.todo.update({
		where: { id },
		data: { completed },
	});
}

const Home = async () => {
	const todos = await getTodos();

	return (
		<>
			<header className='flex justify-between items-center mb-4'>
				<h1 className='text-2xl'>Todos</h1>
				<Link
					className='border border-slate-300 text-slate-300 px-2 py-1 rounded
					hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
					href='/new'
				>
					New
				</Link>
			</header>
			<ul className='pl-4'>
				{todos.map((todo) => (
					// <li key={todo.id}>{todo.title}</li>
					<TodoItem
						key={todo.id}
						{...todo}
						toggleTodo={toggleTodo}
					/>
				))}
			</ul>
		</>
	);
};

export default Home;
