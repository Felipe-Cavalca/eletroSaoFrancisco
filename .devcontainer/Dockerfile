FROM httpd:2.4

# Add some common utilities
RUN apt-get update \
    && apt-get install -y --no-install-recommends bash curl nano git procps iproute2 \
    && rm -rf /var/lib/apt/lists/*

# Apache tuned to serve the devcontainer workspace
RUN echo 'ServerName localhost\nDocumentRoot "/workspaces/eletroSaoFrancisco"\n<Directory "/workspaces/eletroSaoFrancisco">\n  Options Indexes FollowSymLinks\n  AllowOverride All\n  Require all granted\n</Directory>\nDirectoryIndex index.html\nErrorLog /usr/local/apache2/logs/error.log\nCustomLog /usr/local/apache2/logs/access.log combined' > /usr/local/apache2/conf/extra/workspace.conf \
  && sed -i "/Include conf\\/extra\\/httpd-vhosts.conf/a Include conf/extra/workspace.conf" /usr/local/apache2/conf/httpd.conf \
  && sed -i "s/^Listen 80/Listen 8080/" /usr/local/apache2/conf/httpd.conf

WORKDIR /workspaces/eletroSaoFrancisco
