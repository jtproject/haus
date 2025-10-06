export default function TodoList() {
	const list = ['1', '2', '3']
	return (
	<ul>
		{ list.map((value) => <li>{ value }</li>) }
	</ul>
)
}