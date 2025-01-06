<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use App\Http\Requests\StoreTodoRequest;
use App\Http\Requests\UpdateTodoRequest;
use Inertia\Inertia;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $todos = Todo::all();
        return Inertia::render('Todo/Page', ['todos' => $todos]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Todo/Page');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTodoRequest $request)
    {
        $request->validate([
            'task' => 'required|string|max:255',
        ]);

        Todo::create([
            'task' => $request->task,
        ]);

        // return redirect()->route('todos');
    }

    /**
     * Display the specified resource.
     */
    public function show(Todo $todo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Todo $todo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTodoRequest $request, Todo $todo)
    {
        $validatedData = $request->validated();

        // Update todo
        $todo->update($validatedData);

        // Kembalikan respon
        return redirect()->route('todos');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Todo::findOrFail($id)->delete();
    }
    public function toggle($id)
    {
        $todo = Todo::findOrFail($id);
        $todo->completed = !$todo->completed;
        $todo->save();

        // return redirect()->route('todos');
    }
}
