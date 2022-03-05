<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subjects = [
            ['name' => 'Geography'],
            ['name' => 'Music'],
            ['name' => 'Arithmetic']
        ];

        foreach ($subjects as $index => $subject) {
            DB::table('subjects')->updateOrInsert(['name' => $subject['name']], $subject);
            $userId = $index === 0 ? 1 : 2;
            DB::table('user_subjects')->updateOrInsert(
                ['user_id' => $userId, 'subject_id' => $index + 1],
                ['user_id' => $userId, 'subject_id' => $index + 1]
            );
        }
    }
}
