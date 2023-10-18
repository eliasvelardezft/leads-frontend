<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-900">
        <div class="w-full max-w-md p-8 bg-white rounded shadow-md flex flex-col items-center">
            <h1 class="mb-4 text-2xl font-semibold text-gray-700">Home</h1>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-4 relative">
                <router-link to="/register-lead" class="block absolute inset-0"></router-link>
                Register lead
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full relative">
                <router-link to="/enroll" class="block absolute inset-0"></router-link>
                Enroll
            </button>
        </div>
    </div>
</template>
