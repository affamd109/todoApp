export default function EmptyTodo() {
  return (
    <div className="flex flex-col items-center justify-center text-gray-500 p-6">
      <img
        src="https://cdn-icons-png.flaticon.com/512/6194/6194029.png
"
        alt="empty"
        className="w-24 h-24 opacity-40"
      />
      <p className="mt-4 text-lg italic text-center">Your todo list is empty!</p>
    </div>
  );
}
