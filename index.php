<?php 
    include_once "koneksi.php";

    $sql = "SELECT * FROM mahasiswa";
    $query = mysqli_query($koneksi, $sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
</head>
<body>
    <div class="container-fluid">
        <h2>Data Mahasiswa</h2>
        <a class="btn btn-primary mt-2 mb-4" href="add.php">Tambah Data</a>
        <div class="row">

            <div class="col-md-12">
                <div class="table-responsive">
                    <table class="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Nama</th>
                                <th>Tanggal Lahir</th>
                                <th>Jurusan</th>
                                <th>Alamat</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php 
                                $i = 1;
                                while($data = mysqli_fetch_assoc($query)){ 
                            ?>
                            <tr>
                                <td><?php echo $i; ?></td>
                                <td><?php echo $data['nama']; ?></td>
                                <td><?php echo $data['tanggal_lahir']; ?></td>
                                <td><?php echo $data['jurusan']; ?></td>
                                <td><?php echo $data['alamat']; ?></td>
                                <td><a class="btn btn-info btn-sm" href="edit.php?id=<?php echo $data['id']; ?>">Edit</a> <a class="btn btn-danger btn-sm" href="delete.php?id=<?php echo $data['id']; ?>">Delete</a></td>
                            </tr>
                            <?php
                                    $i++;
                                } 
                            ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</body>
</html>