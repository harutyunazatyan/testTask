<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserLoginRequest;
use Illuminate\Support\Facades\Auth;
use \Illuminate\Http\Request;

class UserController extends Controller
{
    public function login(UserLoginRequest $request)
    {
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            $user = \auth()->user();
            Auth::login($user);
            return response()->json(
                [
                    'success' => true,
                    'data' => [
                        'message' => 'Successfully Login',
                        'user' => Auth::user()
                    ]
                ]
            );
        }

        return response()->json(
            [
                'success' => false,
                'data' => [
                    'message' => 'Wrong Password or Login',
                    'user' => null
                ]
            ]
        );
    }

    public function currentUser()
    {
        return response()->json(
            [
                'success' => true,
                'user' => auth()->user(),
            ]
        );
    }

    public function logout(Request $request)
    {
        Auth::guard()->logout();

        return response()->json(
            [
                'success' => true,
                'message' => 'Logged Out',
            ]
        );

    }

}
