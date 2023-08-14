'use client';

type Props = {
	id: string;
	title: string;
	completed: boolean;
	toggleTodo: (id: string, completed: boolean) => void;
};

const TodoItem = ({ id, title, completed, toggleTodo }: Props) => {
	return (
		<li className='flex gap-1 items-center'>
			<input
				id={id}
				type='checkbox'
				className='cursor-pointer peer'
				defaultChecked={completed}
				onChange={(e) => toggleTodo(id, e.target.checked)}
			/>
			<label
				htmlFor={id}
				className='cursor-pointer peer-checked:line-through peer-checked:text-slate-500'
			>
				{title}
			</label>
		</li>
	);
};

export default TodoItem;
